exports.handler = async () => {
  try {
    const response = await fetch('https://ramocheck.netlify.app/data/claims.json');
    const claims = await response.json();
    const total = claims.length;
    const trueCount = claims.filter(c => c.status === 'True').length;
    return {
      statusCode: 200,
      body: JSON.stringify({ truthScore: (trueCount / total * 100).toFixed(1) })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to calculate score' })
    };
  }
};