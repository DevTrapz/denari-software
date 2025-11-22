const timeline_items = [
  {
    id: "f77ebe1d-ae3f-47ac-8b69-e9476b8168fa",
    title: "Pledge Acknowledgement | LifeSongs",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:06:01.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h2>LifeSongs</h2>Happy Fall!<br>Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br /><hr />Pledge Amount: $5.00<br />Description: Give Now                                <br />Fund: 714901008      <br />Frequency: Monthly<br />Payment Method: Credit Card<br />Notes: ',
  },
  {
    id: "eba1eb91-b480-4e29-bfa9-bcedaced4e66",
    title: "New Pledge Notice | API Website",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:05:58.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h3>LifeSongs</h3><hr />Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br /><hr />Pledge Amount: 5<br />Description: Give Now                                <br />Fund: Gift Fund<br />Frequency: Monthly<br />Payment Method: Credit Card<br />Notes: <p><small>The donor above made a new online pledge.</small></p>',
  },
  {
    id: "54666004-35c1-4503-a09a-c727e07c8e15",
    title: "New Pledge Notice | API Website",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:05:58.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h3>LifeSongs</h3><hr />Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br /><hr />Pledge Amount: 5<br />Description: Give Now                                <br />Fund: Gift Fund<br />Frequency: Monthly<br />Payment Method: Credit Card<br />Notes: <p><small>The donor above made a new online pledge.</small></p>',
  },
  {
    id: "1342c23a-d988-4ab7-8028-a6f405fdfe59",
    title: "New Pledge Notice | API Website",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:05:58.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h3>LifeSongs</h3><hr />Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br /><hr />Pledge Amount: 5<br />Description: Give Now                                <br />Fund: Gift Fund<br />Frequency: Monthly<br />Payment Method: Credit Card<br />Notes: <p><small>The donor above made a new online pledge.</small></p>',
  },
  {
    id: "e703cde1-7ff1-4e09-a8a8-a5fec8392977",
    title: "Duplicate Donor Notice | API Website",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:03:53.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h3>LifeSongs</h3><p>Duplicate Donor Notice</p><hr />Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br />Added: 10/22/2025<hr /><p><small>The donor above was added to your database. When added, at least one other donor in the list matched as a duplicated.</small></p>',
  },
  {
    id: "c9bb0b5f-293a-418b-bf8e-4225f3061c6f",
    title: "Duplicate Donor Notice | API Website",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:03:53.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h3>LifeSongs</h3><p>Duplicate Donor Notice</p><hr />Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br />Added: 10/22/2025<hr /><p><small>The donor above was added to your database. When added, at least one other donor in the list matched as a duplicated.</small></p>',
  },
  {
    id: "56ca032f-20ac-4e5e-bb68-0ee7ae619ec9",
    title: "Duplicate Donor Notice | API Website",
    item_creator: {
      name: "Lifesongs - Kaufman",
    },
    created_at: "2025-10-22T19:03:53.000Z",
    content:
      '<p><img width="200px" style="width:200px; height:auto; border:none;" id="logo-img" src="https://lifesongs.denarionline.com/images/lifesongsheader-mini.png" alt="Logo"></p><h3>LifeSongs</h3><p>Duplicate Donor Notice</p><hr />Account#: 994011593<br />Name: Dominique Brown<br />Email Address: queenshorty85@gmail.com<br />Added: 10/22/2025<hr /><p><small>The donor above was added to your database. When added, at least one other donor in the list matched as a duplicated.</small></p>',
  },
];

const all_dates = timeline_items.map((item) => {
  return item.created_at;
});

const unqiue_dates = [...new Set(all_dates)];

const unqiue_ids = unqiue_dates.map((date) => {
  const item = timeline_items.find((item) => item.created_at == date);
  return item.id;
});

let duplicate_ids = timeline_items.reduce((acc, item) => {
  !unqiue_ids.includes(item.id) && acc.push(item.id);
  return acc;
}, []);

console.log(duplicate_ids);

return {
  duplicate_ids,
};
