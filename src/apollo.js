import ApolloClient from "apollo-boost";

const clinet = new ApolloClient({
  uri: "https://movieql.now.sh/"
});

export default clinet;
