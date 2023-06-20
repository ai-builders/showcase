# Web Scraping and Article Summarization

This program is developed as a tool to summarize the web contents. It consists of web scraping, summarization prompt and translation prompt using **gpt-3.5-turbo-16k**.


## Installation

1. Create conda environment

	```sh
	conda create -n your_env python=3.9.12
	```

2. Clone the repository

	```sh
	git clone https://github.com/ai-builders/showcase.git
	```

3. Navigate to the project directory

	```sh
	cd showcase/scripts
	```

4. Install the requited dependencies

	```sh
	pip install -r requirements.txt
	```

## Usage

### • Access API Key

The program needs to be configured with your account’s secret key which is available on the [website](https://platform.openai.com/account/api-keys). Then, set it as the ‘OPEN_API_KEY’ environment variable before executing the program:

```python
import openai

GPT_MODEL = 'gpt-3.5-turbo-16k'
os.environ['OPENAI_API_KEY'] = 'sk-...' # OpenAI API key
openai.api_key = os.environ['OPENAI_API_KEY']
```

GPT model can be changed, but it is possible to cause exceeding token error if the maximum tokens of that model is below 5k.

### • Template

The instruction template of summary and translation can be accessed by:

- Prompt instructions are located at ./template/

	```python
	summary_prompt = “./template/summary_prompt.txt”
	translation_prompt = “./template/translate_prompt.txt”
	```

The customization of these templates are available, which can be done by directly editing the file corresponding to desired templates.

### • Prompt

To start the prompt, there are a few steps to follow:

1. Import csv file that contains a list of URL, summary template, and translation template
2. Initialize the prompt

	```python
	response = get_completion(summary_template, translate_template, parsed_text)
	```

3. Export the completio and callback

## Limitations

Please note that although the project employs a powerful large language model like gpt-3.5-turbo-16k model, there are still some limitations:

- It may raise some request errors such as exceeding token amounts.
- The customization of the prompt is sensitive to the response.
- The answers for same questions can be different with each trial. 




