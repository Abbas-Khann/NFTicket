import axios from "axios";

export function FETCH_TICKET() {
  return `query {
       tickets(orderDirection:asc) {
       id
       From
       HomeOrAway
       SeatLevel
        }
      }`;
}


export function FETCH_RESELL() {
  return `query {
      resells(orderDirection:asc) {
      id
      From
      To
      HomeOrAway
      SeatLevel
  }
      }`;
}



export async function ticketQuery(query: any) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/ljcutts/buyticketv2";
    const response = await axios.post(SUBGRAPH_URL, {
      query,
    });
    if (response.data.errors) {
      console.error(response.data.errors);
      throw new Error(`Error making subgraph query ${response.data.errors}`);
    }
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function resellQuery(query: any) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/ljcutts/resellv1";
    const response = await axios.post(SUBGRAPH_URL, {
      query,
    });
    if (response.data.errors) {
      console.error(response.data.errors);
      throw new Error(`Error making subgraph query ${response.data.errors}`);
    }
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
