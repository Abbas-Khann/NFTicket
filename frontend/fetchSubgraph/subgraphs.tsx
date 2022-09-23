import axios from "axios";

export function FETCH_TICKET() {
  return `query {
       tickets(orderBy:id) {
       id
       From
       HomeOrAway
       SeatLevel
       Amount
        }
      }`;
}


export function FETCH_RESELL() {
  return `query {
      resells(orderBy:id) {
      id
      From
      To
      HomeOrAway
      SeatLevel
      Amount
  }
      }`;
}

export function FETCH_REFUND() {
  return `query {
       refunds(orderBy:id) {
       id
       HomeOrAway
       SeatLevel
       TokenId
       Amount
    }
      }`;
}

export function FETCH_RECEIVE_REFUND() {
  return `query {
        receiveRefunds(orderBy:id) {
        id
        To
        HomeOrAway
        SeatLevel
        Amount
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

export async function refundQuery(query: any) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/ljcutts/refundv1";
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

export async function receiveRefundQuery(query: any) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/ljcutts/receiverefundv1";
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
