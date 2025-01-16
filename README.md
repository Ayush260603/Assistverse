# Assistverse: Your One Stop Solution to talk with Files

The MERN Stack Chat Web Application is an advanced chatbot that provides responses based on the content of a user-uploaded PDF. By harnessing the capabilities of Google Gemini, a cutting-edge language model (LLM), it offers accurate answers and features like text summarization. This is particularly helpful for understanding intricate research papers and documents. The app is built using the MERN stack—MongoDB, Express.js, React, and Node.js—while FastAPI powers the backend. FastAPI integrates with LangServe to enhance text processing, allowing the chatbot to efficiently generate context-based answers and summaries.

## Snapshots.
 ### Login area

 ![image](https://github.com/user-attachments/assets/8a75b560-88d6-45f3-80e4-af3022fbe782)

 ### Signup area( if you don't have an account, create one)

 ![image](https://github.com/user-attachments/assets/82ece242-6d71-43ed-865e-249dd4563aca)

 ### File Uploading area

 ![image](https://github.com/user-attachments/assets/44188063-478d-424f-9010-09596ce1595a)


 ### Messaging area
![image](https://github.com/user-attachments/assets/f80116ec-6bd1-4304-bf96-e6c8472dfb15)

## steps to run this application

### Move to the client directory & execute the following commands

      npm install
      npm run dev

    
### Then move to the Server directory and execute

    npm install
    npm start

### Finally go to the Model_Server directory and use commands

    pip install -r requirements.txt
    uvicorn app:app --reload

NOTE: Make sure you configure the api url as per the server api's.
