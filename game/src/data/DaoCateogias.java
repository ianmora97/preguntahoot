/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import logic.Categoria;

/**
 *
 * @author ianmo
 */
public class DaoCateogias {
    
    public static Categoria findCategoria(int id) throws Exception {
        String SQL = "select * from categoria where id_categoria=?;";
        Categoria categoria = new Categoria();

        try {
            Connection con = Conn.conectar();
            PreparedStatement st = con.prepareStatement(SQL);

            st.setInt(1, id);
            ResultSet resultado = st.executeQuery();

            while (resultado.next()) {
                categoria.setIdCategoria(resultado.getInt("id_categoria"));
                categoria.setNombre(resultado.getString("nombre"));
            }
            con.close();
            resultado.close();
            st.close();
            return categoria;

        } catch (SQLException ex) {
            System.out.println(ex);
            return categoria;
        }
    }
}
