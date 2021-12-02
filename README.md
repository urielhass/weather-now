# Getting Started
Esse projeto foi criado utilizando como template o [Create React App](https://github.com/facebook/create-react-app).\
Aplicação está escrita em React, Typescript e utiliza SCSS.

## Gerenciador de pacotes
Está sendo utilizado o `yarn` para gerenciar os pacotes da aplicação.

## Sobre o Projeto
Projeto criado para apresentação do clima de 3 cidades: Nairobi, Urubici e Nuuk.\
O projeto utiliza uma API pública [OpenWeather - Weather API](https://openweathermap.org/api).\
É necessário realizar no site o cadastro para obter uma API KEY (chave) de acesso.

### `cp .env.example .env`
Arquivo de exemplo.\
Copiar o arquivo de configuração de exemplo `.env.example` para `.env` e alterar pelas suas credenciais e caso queira alterar mais alguma configuração também é possível.

```properties
REACT_APP_WEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_WEATHER_API_BASE_URL="api.openweathermap.org/data/2.5/weather"
REACT_APP_CACHE_TIME_MINUTES=10
REACT_APP_REFRESH_WEATHER_TIME_MINUTES=10
```

### `yarn start`
Para inicializar e rodar a aplicação no modo de desenvolvimento.\
Irá abrir [http://localhost:3000](http://localhost:3000) para visualizar no browser.

### `yarn test`
Para rodar todos os testes

### `yarn build`
Para rodar um build para produção que irá deixar os arquivos mais performáticos para o ambiente.