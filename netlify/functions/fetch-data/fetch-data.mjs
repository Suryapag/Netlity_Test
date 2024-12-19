exports.handler = async (event, context) => {
  try {
    const url = new URL(event.rawUrl);
    const subject = url.searchParams.get('name') || 'World';

    return {
      statusCode: 200,
      body: `Hello ${subject}`,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};
