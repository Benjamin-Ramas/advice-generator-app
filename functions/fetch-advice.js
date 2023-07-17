const axios = require('axios');

const handler = async () => {

  const url = `https://api.adviceslip.com/advice`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: data.slip.id,
        message: data.slip.advice
      }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }