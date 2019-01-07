# Localhost-Steam-API
This project provides an easy way to access and use the Steam API on a local machine.

## Installation & Usage
1. Copy the Localhost-Steam-API folder to your local machine.
2. Obtain a Steam Web API Key [HERE](https://steamcommunity.com/dev/apikey)
3. Edit lines 1 + 2 in the server.js file.
    ```javascript
    const steamKey = "";    // Place your Steam API key in this variable as a string
    const steamID = "";     // Place your Steam ID in this variable as a string
    ```
4. Navigate to Localhost-Steam-API folder in command prompt or terminal
5. Run `node server.js`

You can now open a browser and navigate to pages on the server

## Navigation
Currently there is only one implemented method from the Steam API


| Pages                 | Usage         | Description  |
| --------------------- | ------------- | ------------ |
| localhost:4000/       | Index         | Copy of /:appid without data |
| localhost:4000/:appid | Replace ":appid" with ID of a steam game | Tracks amount of achievements in :appid |

## Tools Used
+ [Steam Web API](https://partner.steamgames.com/doc/webapi_overview)
+ [Node JS](https://nodejs.org/en/)
+ [EJS](http://ejs.co/)
