import express from 'express';
import cors from 'cors';
const app = express();
const PORT =process.env.PORT || 5000;
app.use(cors());    




app.get('/', (req, res) => {
  res.send('Hello World from Express');
});

app.get('/api/jokes', (req, res) => {
    const jokes =[
        {
            id:1,
            joke:"I told my wife she should embrace her mistakes. She gave me a hug."
        },{
            id:2,
            joke:"I'm reading a book on anti-gravity. It's impossible to put down!"
        },{
            id:3,
            joke:"I told my wife she should embrace her mistakes. She gave me a hug."
        },
        {
            id:4,
            joke:"I told my wife she should embrace her mistakes. She gave me a hug."
        }
    ]
    res.json(jokes);
    });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});