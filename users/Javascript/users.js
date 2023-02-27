const allUsers = document.getElementById("userstable");
const headerforusers = document.getElementById("headerforusers");

//render Users.
const renderUsers = async () => {
  const response = await fetch("https://lazy-puce-fawn-yoke.cyclic.app/users");
  const users = await response.json();
  let template = "";
  users.forEach((user) => {
    template += `
     <tr class="table__row">
                <td class="table__idtable__cell">
                  <a href="#" class="table-link"
                    ><span class="user-id">${user.id}</span>
                  </a>
                </td>
                <td class="table__username table__cell u-text-right">
                  <span class="num_negative">${user.username}</span>
                </td>
                <td class="table__available table__cell u-text-right">
                  ${user.emailaddress}
                </td>
                <td class="table__limit table__cell u-text-right">
                  ${user.phonenumber}
                </td>
                <td class="table-action table__available-action table__cell">
                  <a href=""
                 >
                    <img
                      src="/images/delete.png"
                      width="32"
                      height="32"
                       onclick="deleteUser(${user.id})"
                      alt="Delete a user icon"
                    />
                  </a>
                </td>
              </tr>
    `;
  });

  allUsers.innerHTML = template;
  headerforusers.innerHTML = `<span>ALL USERS:${users.length} </span>`;
};

window.addEventListener("DOMContentLoaded", () => renderUsers());
// delete users

const deleteUser = async (id) => {
  const response = await fetch(
    `https://lazy-puce-fawn-yoke.cyclic.app/users/${id}`,
    {
      method: "DELETE",
    }
  );  
};
