package com.handlebars.example.service;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.handlebars.example.service.vo.Product;

@Path("/product")
public class ProductService {

	@Path("/")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProducts() {
		List<Product> products = new ArrayList<Product>();

		Product product1 = new Product();
		product1.setName("Television");
		product1.setPrice(20.3);
		product1.setImage("http://www.massagedocs.com/wp-content/uploads/2011/07/1310248809_packing.png");
		products.add(product1);

		Product product2 = new Product();
		product2.setName("DVD");
		product2.setPrice(2.3);
		product2.setImage("http://www.massagedocs.com/wp-content/uploads/2011/07/1310248809_packing.png");
		products.add(product2);

		Product product3 = new Product();
		product3.setName("Jabón");
		product3.setPrice(0.2);
		product3.setImage("http://www.massagedocs.com/wp-content/uploads/2011/07/1310248809_packing.png");
		products.add(product3);

		return Response.status(Status.OK).entity(products).build();
	}
}
