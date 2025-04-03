// Trigger scrollmint redeploy

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { devKey, buildType, stage } = req.body;

  if (!devKey || !buildType || !stage) {
    return res.status(400).json({ error: 'Missing scroll fields' });
  }

  console.log(`Minting scroll: ${buildType}, Stage: ${stage}, DevKey: ${devKey}`);

  return res.status(200).json({
    message: 'Scroll minted successfully',
    buildType,
    stage,
    vault: 'STATICNODE-VIS'
  });
}
