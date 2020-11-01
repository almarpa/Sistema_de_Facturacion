package com.alejandro.backendapi.dao;

import org.springframework.data.repository.CrudRepository;

import com.alejandro.backendapi.model.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{

	
}
