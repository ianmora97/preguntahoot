/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package logic;

/**
 *
 * @author ianmo
 */
public class KeyGame {
    int idLlave;
    String clave;

    public KeyGame() {
    }

    public KeyGame(int idLlave, String clave) {
        this.idLlave = idLlave;
        this.clave = clave;
    }

    public int getIdLlave() {
        return idLlave;
    }

    public void setIdLlave(int idLlave) {
        this.idLlave = idLlave;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }
    
}
