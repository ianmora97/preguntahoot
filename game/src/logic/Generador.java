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
public class Generador {

    public static String NUMEROS = "0123456789";

    public static String MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static String MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";

    public static String ESPECIALES = "ñÑ";

    public String getNumeroCuenta() {
        return getPassword(NUMEROS, 8);
    }
    public String getPassword() {
        return getPassword(3);
    }
    public String getHardPassWord(){
        return getPassword(MAYUSCULAS + MINUSCULAS + NUMEROS, 8);
    }
    private String getPassword(String key, int length) {
        String pswd = "";
        for (int i = 0; i < length; i++) {
            pswd += (key.charAt((int) (Math.random() * key.length())));
        }
        return pswd;
    }
    private String getPassword(int length) {
        String pswd = "";
        for (int i = 0; i < length; i++) {
            pswd += (MINUSCULAS.charAt((int) (Math.random() * MINUSCULAS.length())));
        }
        for (int i = 0; i < length; i++) {
            pswd += (NUMEROS.charAt((int) (Math.random() * NUMEROS.length())));
        }
        return pswd;
    }

}
