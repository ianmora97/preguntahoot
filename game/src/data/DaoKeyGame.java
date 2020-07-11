package data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import logic.KeyGame;

public class DaoKeyGame {
    public static boolean INSERT(String key) throws Exception{
        String SQL = "insert into llavejuego (clave) values(?)";
        try {
            Connection con = Conn.conectar();
            PreparedStatement st = con.prepareStatement(SQL);
            st.setString(1, key);
            int r = st.executeUpdate();
            con.close();
            st.close();
            return r != 0;
        } catch (SQLException ex) {
            System.out.println(ex);
            return false;
        }
    }
    public static KeyGame SELECT(KeyGame llave) throws Exception {
        String SQL = "select * from llavejuego where clave = ?;";
        KeyGame key = null;

        try {
            Connection con = Conn.conectar();
            PreparedStatement st = con.prepareStatement(SQL);

            st.setString(1, llave.getClave());
            ResultSet resultado = st.executeQuery();

            if (resultado.next()) {
                key = new KeyGame();
                key.setIdLlave(resultado.getInt("id_llave"));
                key.setClave(resultado.getString("clave"));
            }
            con.close();
            resultado.close();
            st.close();
            return key;
        } catch (SQLException ex) {
            System.out.println(ex);
            return null;
        }
    }
    
}
