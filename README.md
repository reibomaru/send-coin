# send-coin
ローカルのネットワーク上で送金を行うことができるアプリ

## To run the app
1. ### run the dapp server
    1. #### install dependencies
    ```bash
    cd <root>/server
    npm install
    ```
    2. #### start truffle
    ```bash
    npm start
    ```
    3. #### compile and deploy (called migrate in truffle)
    compile the dapp
    ```
    # in the truffle interactive console
    compile
    ```
    migrate the dapp
    ```
    # in the truffle interactive console
    migrate
    ```
2. ### run the client server (with react)
start client server
```bash
cd <root>/client
npm install
npm start
```
## To run the app on Ganache
1. ### setup ganache
    1. #### clone ganache 
    ```
    git submodule update --init --recursive
    ```
    2. #### run ganache
    ```
    cd <root>/server/dev/ganache-ui
    npm install
    npm run dev
    ```
3. ### migrate to ganache
```
cd <root>/server
npm install
npm run compile
npm run deploy-ganache
```
5. ### run the client server
```
cd <root>/client
npm install
npm run start-ganache
```
