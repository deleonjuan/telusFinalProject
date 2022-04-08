class ShortenerService {
  constructor() {
    this.urls = [
      {
        hash: "12345",
        url: "https://github.com/LuisPaGarcia/training-2022/tree/develop-2/exercises",
      },
    ];
  }

  findOne(hash) {
    const url = this.urls.find((e) => e.hash == hash);
    if (!url) return null;
    return url;
  }

  create(data) {
    const newUrl = {
      url: data.url,
      hash: (Math.floor(Math.random() * 99999) + 10000).toString(),
    };
    this.urls.push(newUrl);
    return newUrl
  }
}

module.exports = ShortenerService;
