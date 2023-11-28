// Metodos de propiedad o funciones dentro de objetos

const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log("Pausando....."),
  borrar: (id) => console.log(`Borrando cancion con el id ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la playlist ${nombre}`),
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("Salsa");
reproductor.crearPlaylist("Merengue");
reproductor.crearPlaylist("Ranchera");
reproductor.reproducirPlaylist("Salsa");
