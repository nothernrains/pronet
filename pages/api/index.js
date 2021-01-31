export default (req, res) => {
    res.statusCode = 200;
    res.json({ ApiVersion: '0.0.1', AppName: 'ProNet' });
};
  