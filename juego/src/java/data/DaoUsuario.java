package data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import logic.Usuario;

public class DaoUsuario {

    public static Usuario SELECTUSERCLAVE(String user, String clave) throws Exception {
        String SQL = "select * from usuario where username=? and clave=?;";
        Usuario usuario = null;

        try {
            Connection con = Conn.conectar();
            PreparedStatement st = con.prepareStatement(SQL);

            st.setString(1, user);
            st.setString(2, clave);
            ResultSet resultado = st.executeQuery();

            if (resultado.next()) {
                usuario = new Usuario();
                usuario.setId(resultado.getInt("id"));
                usuario.setNombre(resultado.getString("nombre"));
                usuario.setUsername(resultado.getString("username"));
                usuario.setClave(resultado.getString("clave"));
                usuario.setGuest(resultado.getInt("guest"));
                usuario.setRol(resultado.getInt("rol"));
            }
            con.close();
            resultado.close();
            st.close();

            return usuario;

        } catch (SQLException ex) {
            System.out.println(ex);
            return null;
        }
    }
}
