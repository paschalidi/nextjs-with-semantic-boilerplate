# new-vimcar-website 
the new vimcar website. including a CMS  

## Contents

- [Installation](#installation)
- [Run](#run)
- [Deploy](#deploy)
- [Generators](#generators)
- [Test](#test)
- [Licence](#licence)

## Installation
* To manually install the project to your local machine please follow the next steps.
    ``` sh
    git clone https://github.com/atlanticventures/new-vimcar-website.git <your-project-folder> 
    cd <your-project-folder> 
    yarn install
    ```
The above commands will install all the dependencies you need in order to run the project.

In case YARN is not installed in your machine go [here](https://yarnpkg.com/lang/en/docs/install/).

## Run
* To run the application for developent purposes 
    ``` sh
    yarn dev
    ```
* To run the application for production porpuses 
    ``` sh
    yarn start
    ```
## Deploy 
* To deploy using now follow the next steps

    ``` sh
    yarn build && yarn start
    ```
    Leave the server running.
    Open a new terminal or a tab and then run the follow command
    
    ``` sh
    yarn deploy
    ```
* To delete deployed instances [here](https://zeit.co/blog/now-rm-is-here-and-more)

## Generators

## Test 

## Licence