import users from "@/constants/mockData/users.json";

function getChatUsers() {
  console.log('[CU] trying to fetch data - service')
  return users;
}

export default getChatUsers;
