class SecretService {
  constructor() {
    this.secrets = [
      {
        hash: "12345",
        secret: "hola",
        timesAllowedtoWatch: 5,
      },
    ];
  }

  findOne(hash) {
    const secret = this.secrets.find((e) => e.hash == hash);
    if (!secret) return null;
    
    // actualiza las veces que se puede ver con -1 vez
    const secretIndex = this.secrets.findIndex((e) => e.hash == hash);
    if(secret.timesAllowedtoWatch < 1){
        // si ya llego a su limite de veces que puede ser visto, se elimina del arreglo
        this.secrets.splice(secretIndex, 1)
        return null
    }
    secret.timesAllowedtoWatch -= 1
    this.secrets[secretIndex] = secret
    
    return secret;
  }

  create(data) {
    const newSecret = {
        hash: (Math.floor(Math.random() * 99999) + 10000).toString(),
        secret: data.secret,
        timesAllowedtoWatch: Number(data.timesAllowedtoWatch),
    };
    this.secrets.push(newSecret);
    return newSecret;
  }
}

module.exports = SecretService;
