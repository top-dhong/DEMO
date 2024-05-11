// app.js
const express = require('express');
const app = express();
const { Configuration, OpenAIApi } = require('@openai/api');
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 
// 设置你的OpenAI API密钥
const configuration = new Configuration({
  apiKey: "",
});
 
const openai = new OpenAIApi(configuration);
 
// 简单的聊天机器人函数
async function simpleChatbot(message) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // 使用的模型
      messages: [{ role: "user", content: message }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
 
// 使用聊天机器人
simpleChatbot("你好，ChatGPT！").then((response) => {
  console.log(response);
});