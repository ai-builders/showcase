# AI Builders Showcase

A showcase website for AI Builders.

## Requirements

- Node 16+ (with NPM 7+)

## Dev

To run the app in your local

```sh
# first time only
npm install

npm run dev
```

## Add a showcase

Create a markdown file in `posts/{year}` with the name of `{number}-{title-in-kebab-case}.md`. The most important part in the file is the [Front Matter](https://jekyllrb.com/docs/front-matter/), an example is shown below.

```txt
---
date: "2021-07-04"
title: "FoodyDudy"
builder: "Phacharaphol Somboontham (Gemmy)"
builder_info: "ประถมศึกษาปีที่ 6 / เชียงใหม่"
thumbnail: "/images/2021/001/1.png"
links:
  github: "https://github.com/GemmyTheGeek/FoodyDudy"
  facebook: "https://www.facebook.com/aibuildersx/posts/165448438956937"
  blog: "https://bit.ly/2UkrtST"
---
```

`date`, `title`, `builder`, `builder_info`, `thumbnail` and `links` are required. For `github`, `facebook` and `blog`, you can omit the field or add empty string `""` and add it later if it is not available at the time.

### Add images

You can add images for each showcase in `public/images/{year}/{showcase-number}` folder. Images should be `JPEG`, `JPG` or `PNG` format.

To add image in the showcase markdown file, use the following syntax:

```txt
![Alternate Text](/images/{year}/{showcase-number}/{image-name}.png)
```

## Report issue

If you find that the showcase is not rendered properly, please report it on [Github Issues](https://github.com/ai-builders/showcase/issues).