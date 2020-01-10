import fetch from "./fetch"

export function fetchGoodList(params) {
	return fetch({
		method: "Get",
		params: params,
		url: "/youzan/getGoodList"
	});
}

export default {
    fetchGoodList
}