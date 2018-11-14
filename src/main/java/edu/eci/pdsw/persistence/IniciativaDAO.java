package edu.eci.pdsw.persistence;
import java.sql.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.exceptions.PersistenceException;

import edu.eci.pdsw.entities.*;

public interface IniciativaDAO {
	
    public void crearIniciativa(Iniciativa iniciativa) throws PersistenceException;
    
    public List<Iniciativa> consultarIniciativas() throws PersistenceException;
    public List<Iniciativa> consultarIniciativasRelacionadas(Iniciativa iniciativa) throws PersistenceException;
    public List<Iniciativa> consultarIniciativasxClaves(String palabraClave) throws PersistenceException;
    public List<Iniciativa> consultarIniciativasxOrden(String orden) throws PersistenceException;
    public List<Iniciativa> consultarIniciativasxEstado(Estado estado) throws PersistenceException;
    public Iniciativa consultarIniciativa(String nombreIniciativa) throws PersistenceException;
    
    public List<Iniciativa> consultarIniciativasxProponente(@Param("correo")String correo);
    public void agregarComentario(Usuario usuario, Iniciativa iniciativa, Comentario comentario) throws PersistenceException;
    public int consultarCantidadVotos(String nombreIni) throws PersistenceException;
    public List<Usuario> consultarInteresados(String nombreIni) throws PersistenceException;
    public void modificarEstado(String nombreIniciativa, Estado estado) throws PersistenceException;
    public void agregarPalabraClave(String nombreIni,String desc) throws PersistenceException;
}
