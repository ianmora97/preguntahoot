package logic;

public class Usuario {
    String nombre;
    String clave;
    int rol;

    public Usuario(String nombre, String clave, int rol) {
        this.nombre = nombre;
        this.clave = clave;
        this.rol = rol;
    }

    public Usuario() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public int getRol() {
        return rol;
    }

    public void setRol(int rol) {
        this.rol = rol;
    }
    
}