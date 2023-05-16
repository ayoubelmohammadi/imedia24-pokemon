# iMedia24 Pokemon

This project is a React.js application that showcases a collection of Pokémon characters.

## Getting Started

These instructions will guide you on how to set up and run the project on your local machine.

### Prerequisites

To run this project, you need to have the following installed on your local machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (optional)

### Installation

Follow these steps to install and run the project:

1. Clone the repository:

```shell
git clone https://github.com/ayoubelmohammadi/imedia24-pokemon.git
```

2. Change into the project directory:

```shell
cd imedia24-pokemon
```

3. Install the dependencies:

```shell
npm install
```

### Running the Application

To run the application locally:

1. Start the development server:

```shell
npm start
```

2. Open your web browser and visit `http://localhost:3000` to access the application.

### Docker

You can also run the application using Docker. Docker must be installed on your local machine.

#### Option 1: Use Dockerfile (build locally)

1. Build the Docker image from the Dockerfile:

```shell
docker build -t imedia24-pokemon .
```

2. Start a container from the local image:

```shell
docker run -p 3000:3000 imedia24-pokemon
```

3. Open your web browser and visit `http://localhost:3000` to access the application.

#### Option 2: Use Docker Hub image (fetch from Docker Hub)

If you prefer to use the pre-built Docker image from Docker Hub:

1. Start a container using the image from Docker Hub:

```shell
docker run -p 3000:3000 ayoubelmohammadi/imedia24-pokemon
```

2. Open your web browser and visit `http://localhost:3000` to access the application.

## License

This project is licensed under the [MIT LICENSE](LICENSE).