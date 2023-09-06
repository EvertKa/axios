import { eleringAPI } from "./api/eleringAPI";

try {
  const response = await eleringAPI.get('/balance');
  console.log(response)

} catch(error) {
  throw new Error(error)
};


import { fakeAPI } from "./api/fakeAPI";

try {
  const response = await fakeAPI.get('/balance');
  console.log(response)

} catch(error) {
  throw new Error(error)
}


