# fsharp-ecommerce

A full-stack ecommerce prototype featuring product browsing, cart management, and search. Built with an F#/Giraffe REST API and a React/Redux frontend, backed by MongoDB.

![eCommerce Preview](https://i.ibb.co/71D3XCW/Screenshot-2020-08-12-at-18-45-45.png)

---

## Backend

- F#
- Giraffe
- MongoDB

---

## Frontend

- JavaScript
- React
- Redux
- Ant Design

---

## How to run

Prerequisites: MongoDB, .NET SDK, and a JS package manager (npm or yarn).

1. Clone this repo
2. Export the MongoDB environment variable
   ```
   export MONGO_URL=mongodb://localhost:27017/
   ```
3. Import the product data into MongoDB (`openfoodfacts.csv` has had the `code` column changed to `_id`)
   ```
   mongoimport --type tsv --db products -c products --ignoreBlanks --fieldFile=fieldtypes.txt --columnsHaveTypes --drop openfoodfacts.csv
   ```
4. Start the backend
   ```
   cd Backend
   dotnet run
   ```
5. Start the frontend
   ```
   cd Frontend/salt-frontend
   yarn install
   yarn start
   ```
