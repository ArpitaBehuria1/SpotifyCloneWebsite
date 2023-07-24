const music= [{
    id:1,
    singer:"justin",
    title:"ghost",
    song:"./songs/s1.mp3",
    art : "C:\Users\Arpita\Desktop\Clonning Website\New folder\Archive\images\Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg"
},
{
    id:1,
    singer:"justin",
    title:"ghost",
    song:"./songs/s1.mp3",
    art : "./images/img1.jpg"
}];

for(var i=0; i<music.length;i++)
{
    document,getElementById('song-list').innerHTML=
    <tr>
    <td>${music[i].id}</td>
    <td>${music[i].title}</td>
    <td>${music[i].singer}</td>
    <td>Album</td>
    <td>Date Added</td>
    <td>#</td>
</tr>
}