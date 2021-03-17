# README #

This is the repository of Coffee App

Coffee App is a dummy REST API app made for SWENSON HE co. as a backend task.


### Features

- Built using Node.js, express, and Typescript
- Implementing clean architecture
- Using JEST for integration tests
- Using dummy JSON database to simulate DB, choosing a DB engine would not be challenging.
- Implementing query parameters filtering and query parameter validation for more API reliability.
- Implementing API Docs using Swagger API
- Offer a Docker file to build a container out of the app

### Database ERD
- Chose not to parse strings as query parameters for filters so I used this Database design, as when it's real world scenario we can easily use indexes for faster queries.

- Follow this link for full interactive diagram.
https://lucid.app/lucidchart/08547e7c-3ca8-4b40-b7b0-d10bc6b549ea/view

![](https://i.imgur.com/RdmP7tF.png)

### Further about the DB implementation
- This app use a simple DB made from scratch with JSON data and functions needed.
- As the app allows me to connect any database type that implements DB interface I thought about making the real life example of the DB using DynamoDB of AWS and use Global secondary indexes to boost filtering and querying on tables or any DB type the idea is the same.

### Getting started

#####Project run in development mode

`$ npm install`

`$ npm run dev`

![](https://i.imgur.com/ZgGxbB7.png)

#####Run testing environment with coverage

`$ npm run test`

![](https://i.imgur.com/7ngPVEc.png)

#####build the project for production

`$ npm run build`

### More info
- This app uses environment variables it should be located at `.env` you can look up the needed variables through `.env.example`.

- I didn't use entities and use cases building blocks of the architecture as it were not needed in such simple app.

- More details about Clean Architecture, depending on abstractions, connection between layers through interfaces, you can visit this article.
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

### Not implemented
- [ ] Make a pipeline for deployment to AWS LAmbda function through code deploy or maybe SAM framework for cloud formation.
- [ ] Deploy the app as a cloud function.

### API docs
- You can access API docs through `base_url`/api-docs

![](https://i.imgur.com/979Shjy.png)

### APIs in the task document
- All answers are made with integration tests in the app source.
- All large machines
`base_url`/coffee-machines/filter?product_type=0
<pre>
[
	{
		id: 3,
		product_type: 0,
		water_line_compatible: false,
		sku: "CM101"
	},
	{
		id: 4,
		product_type: 0,
		water_line_compatible: true,
		sku: "CM102"
	},
	{
		id: 5,
		product_type: 0,
		water_line_compatible: true,
		sku: "CM103"
	}
]
</pre>

- All large pods
`base_url`/coffee-pods/filter?product_type=0
<pre>
[
	{
		id: 10,
		product_type: 0,
		coffee_flavor: 0,
		pack_size: 0,
		sku: "CP101"
	},
	{
		id: 11,
		product_type: 0,
		coffee_flavor: 0,
		pack_size: 0,
		sku: "CP103"
	},
	{
		id: 12,
		product_type: 0,
		coffee_flavor: 1,
		pack_size: 0,
		sku: "CP111"
	},
	{
		id: 13,
		product_type: 0,
		coffee_flavor: 1,
		pack_size: 0,
		sku: "CP113"
	},
	{
		id: 14,
		product_type: 0,
		coffee_flavor: 2,
		pack_size: 0,
		sku: "CP121"
	},
	{
		id: 15,
		product_type: 0,
		coffee_flavor: 2,
		pack_size: 0,
		sku: "CP123"
	},
	{
		id: 16,
		product_type: 0,
		coffee_flavor: 3,
		pack_size: 0,
		sku: "CP131"
	},
	{
		id: 17,
		product_type: 0,
		coffee_flavor: 3,
		pack_size: 0,
		sku: "CP133"
	},
	{
		id: 18,
		product_type: 0,
		coffee_flavor: 4,
		pack_size: 0,
		sku: "CP141"
	},
	{
		id: 19,
		product_type: 0,
		coffee_flavor: 4,
		pack_size: 0,
		sku: "CP143"
	}
]
</pre>

- All espresso machines
`base_url`/coffee-machines/filter?product_type=2
<pre>
[
	{
		id: 6,
		product_type: 2,
		water_line_compatible: false,
		sku: "EM001"
	},
	{
		id: 7,
		product_type: 2,
		water_line_compatible: false,
		sku: "EM002"
	},
	{
		id: 8,
		product_type: 2,
		water_line_compatible: true,
		sku: "EM003"
	}
]
</pre>

- All espresso vanilla pods
`base_url`/coffee-pods/filter?product_type=1&coffee_flavor=0
<pre>
[
	{
		id: 0,
		product_type: 1,
		coffee_flavor: 0,
		pack_size: 0,
		sku: "CP001"
	},
	{
		id: 1,
		product_type: 1,
		coffee_flavor: 0,
		pack_size: 0,
		sku: "CP003"
	}
]
</pre>


- All small pods
`base_url`/coffee-pods/filter?product_type=1
<pre>
[
	{
		id: 0,
		product_type: 1,
		coffee_flavor: 0,
		pack_size: 0,
		sku: "CP001"
	},
	{
		id: 1,
		product_type: 1,
		coffee_flavor: 0,
		pack_size: 0,
		sku: "CP003"
	},
	{
		id: 2,
		product_type: 1,
		coffee_flavor: 1,
		pack_size: 0,
		sku: "CP011"
	},
	{
		id: 3,
		product_type: 1,
		coffee_flavor: 1,
		pack_size: 0,
		sku: "CP013"
	},
	{
		id: 4,
		product_type: 1,
		coffee_flavor: 2,
		pack_size: 0,
		sku: "CP021"
	},
	{
		id: 5,
		product_type: 1,
		coffee_flavor: 2,
		pack_size: 0,
		sku: "CP023"
	},
	{
		id: 6,
		product_type: 1,
		coffee_flavor: 3,
		pack_size: 0,
		sku: "CP031"
	},
	{
		id: 7,
		product_type: 1,
		coffee_flavor: 3,
		pack_size: 0,
		sku: "CP033"
	},
	{
		id: 8,
		product_type: 1,
		coffee_flavor: 4,
		pack_size: 0,
		sku: "CP041"
	},
	{
		id: 9,
		product_type: 1,
		coffee_flavor: 4,
		pack_size: 0,
		sku: "CP043"
	}
]
</pre>

- All pods sold in 7 dozen packs
`base_url`/coffee-pods/filter?pack_size=3
<pre>
[
	{
		id: 22,
		product_type: 2,
		coffee_flavor: 0,
		pack_size: 3,
		sku: "EP007"
	},
	{
		id: 25,
		product_type: 2,
		coffee_flavor: 1,
		pack_size: 3,
		sku: "EP017"
	}
]
</pre>

### Who can I talk to ?
#####zyadyasser6@gmail.com