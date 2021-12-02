window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
        "<th>Department</th><th>Salary</th><th>Start Date</th>" +
        "<th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td>
               <img src="C:\Users\tanay\Mycore\WebDevelopment\javaScript\htmlCss\assets\Ep3.png">
            </td>
            <td>Tanay</td>
            <td>Male</td>
            <td>
                <div class="dept-label">HR</div>
                <div class="dept-label">Engineer</div>
            </td>
            <td>500000</td>
            <td>12 Feb 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">           
            </td>
        </tr>
        `;
    document.querySelector("#display").innerHTML = innerHtml;
};