/*



*/

// solution
/*

Welcome to Canvas Fun ;-) In this series, we'll learning how to draw the image on a canvas.

Task
You are given a image.


Your task is to count the number of smiling face in the image.

No new canvas methods here. You just need some old methods from #4.

Note
The number of face is 1 to 10.

The size of face is randomly.

The faces will not cover each other

All faces are whole face, no half face appears.

*/

//

function count(b64) {
  let img = new Image();
  let can = new Canvas();
  img.src = b64;

  let h = (can.height = img.height);
  let w = (can.width = img.width);
  let ctx = can.getContext("2d");
  ctx.drawImage(img, 0, 0);

  let vis = [...Array(h)].map((e) => []);
  let dat = ctx.getImageData(0, 0, w, h).data;
  let col = (y, x) => dat.slice((y * w + x) * 4, (y * w + x) * 4 + 3);
  let bgr = (c) => c.every((e, i) => (e - dat[i]) ** 2 < 10);

  let fill = (y, x) => {
    for (let a = [[y, x]], i = 0; a[i] && ([y, x] = a[i]); i++)
      for (let [q, p] of [
        [y - 1, x - 1],
        [y - 1, x],
        [y - 1, x + 1],
        [y, x - 1],
        [y, x + 1],
        [y + 1, x - 1],
        [y + 1, x],
        [y + 1, x + 1],
      ])
        if (p >= 0 && p < w && vis[q] && !vis[q][p] && bgr(col(q, p)))
          (vis[q][p] = 1), a.push([q, p]);
  };

  let ans = -1;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++)
      if (!vis[y][x] && bgr(col(y, x))) ans++, (vis[y][x] = 1), fill(y, x);
  return ans;
}
