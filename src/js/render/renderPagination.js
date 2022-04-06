export const renderPagination = (totalPages, currentPage) => {
  const rootPagination = document.querySelector(".pagination");
  // console.log({ totalPages, currentPage });

  rootPagination.innerHTML = `
    <li class="pagination__page" data-page="1">1</li>
    <li class="pagination__page" data-page="2">2</li>
    <li class="pagination__page" data-page="3">3</li>
  `;
};
