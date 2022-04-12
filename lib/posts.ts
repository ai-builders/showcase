import { readFileSync } from "fs";
import { glob } from "glob";
import matter from "gray-matter";
import path from "path";

interface MatterResultData {
  date: string;
  title: string;
  builder: string;
  builder_info?: string;
  thumbnail: string;
  links?: {
    github?: string;
    facebook?: string;
    blog?: string;
  };
}

export interface PostData extends MatterResultData {
  id: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds() {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`);

  // returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       year: '2021',
  //       id: '001-foody-dudy'
  //     },
  //     ...
  //   },
  // ]
  return fileNames.map((fileName) => {
    const [year, id] = fileName.split("/").slice(-2);

    return {
      params: {
        year,
        id: id.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostList() {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`);

  const postList = fileNames.map((fileName) => {
    const [year, id] = fileName.split("/").slice(-2);
    const filePath = path.join(postsDirectory, year, id);
    const fileContents = readFileSync(filePath, "utf8");

    const matterResult = matter(fileContents);

    return {
      year,
      id: id.replace(/\.md$/, ""),
      ...(matterResult.data as MatterResultData),
    };
  });

  // group by year before returning
  const groupedByYear = postList.reduce(
    (acc: { [index: string]: any }, cur) => {
      if (!acc[cur.year]) {
        return { ...acc, [cur.year]: [cur] };
      }

      return { ...acc, [cur.year]: [...acc[cur.year], cur] };
    },
    {}
  );

  return groupedByYear;
}

export function getPostData(year: string, id: string): PostData {
  const fullPath = path.join(postsDirectory, year, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // combine the data with the id
  return {
    id,
    ...(matterResult.data as MatterResultData),
  };
}
