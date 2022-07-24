export default {
  port: 8000,
  origin:'http://localhost:3000',
  dbUri: "mongodb://localhost:27017/rest-node-api",
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl:'1y',
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgGYwZ1+024xkMMyjJ6e//ZJdBWHRwiZyZe1/lv649KjGJzSuTdfT
tDC97UqjEIwr/VlFX/OruwtvUSy1a0PGNrPOMbKTzEg93Rdep8tLPdtZ4/791ooq
puaEb3Z9cvWXxXsuRE8n9gaWmUP1AdZ3jrBLxwd5lbCZkRbH8814bNK7AgMBAAEC
gYBJvfJLKVspo39nnPFX538X6NKidVjyn6kYSvNum4/KXzwZkxMPhXFJnzUmoCen
z3LCwgJs9+dBaDIe3kgqn1YHX2+nvzLFOnzr2G/YjqndNE4JBS+0/E2rLzX+XrqO
bqKSCxdUBWK3/HJA9DNa4ZaqB7ZtwjFuWY06+unYqwx3mQJBAKUIZQZdbTnf2hWt
37O6+tjjGkveahWv8O6TG+SBpYAHdVxwgMsSF129f51uMvbTk1QNWRNQiPT8GA1f
BvqMWEUCQQCehDK3HcE0ZyDAOOgeixFRaRk0xD18UBEHwCo47nhapG53gMOBe+0E
ocZPW6ajJ7DAyoNpNrynXzwqlBAnOq7/AkAGaUcTcjm2D943DWQtZUwtdNUmsWNJ
qGYhvpFM1USKrr9+cdhvCyrhN2VnxkowkJOepk4Zk/1eFxUQH+rzfNRJAkA5i+Sd
db/eNlI9dmtOK05uL6lm7pcjui10kt7BLFGlFmzEFYrkRwkU1WYZCTzFnnMcimiK
mcSDPp+pFXeHxlYhAkACd1WNLE1mhOxeEEN4F+nWvgCvTPG2bCLUmrvQh8ZL3/lg
Qt8jBisaxgS5DBujYudSqIMjcEDEhT0WanKug6uo
-----END RSA PRIVATE KEY-----`,
  publicKey:`-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGYwZ1+024xkMMyjJ6e//ZJdBWHR
wiZyZe1/lv649KjGJzSuTdfTtDC97UqjEIwr/VlFX/OruwtvUSy1a0PGNrPOMbKT
zEg93Rdep8tLPdtZ4/791ooqpuaEb3Z9cvWXxXsuRE8n9gaWmUP1AdZ3jrBLxwd5
lbCZkRbH8814bNK7AgMBAAE=
-----END PUBLIC KEY-----`
}