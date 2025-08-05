<script>
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7Nh4KydhQtlYjO7st-FmwNovZktAd-diIZ4jDx2gvQBFmevQ_-XddEy3JqDi4K7orTPRvcHJDcyZF/pub?output=csv";

  fetch(SHEET_URL)
    .then(response =&gt; response.text())
    .then(data =&gt; {
      const rows = data.split("\n").map(row =&gt; row.split(","));
      const header = rows[0];
      const firstRow = rows[1];

      const userName = firstRow[0];
      const score = parseInt(firstRow[1]);

      document.getElementById('user').innerText = `👤 ${userName}`;
      document.getElementById('scoreText').innerText = `Баллы: ${score}`;
      document.getElementById('progress').style.width = `${score}%`;

      const imageMap = {
        30: "kopatych.png",
        50: "tea.png",
        70: "nyusha.png"
      &rbrace;;

      let image = "";
      if (score &gt;= 70) image = imageMap[70];
      else if (score &gt;= 50) image = imageMap[50];
      else if (score &gt;= 30) image = imageMap[30];

      if (image) {
        document.getElementById('characterImage').src = `img/${image}`;
        document.getElementById('characterImage').alt = "Progress character";
      &rbrace;
    &rbrace;);
</script>
