package com.handlebars.example.service;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.handlebars.example.service.vo.Menu;
import com.handlebars.example.service.vo.MenuItem;

@Path("/menu")
public class MenuService {

	@GET
	@Path("")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMenu() {
		Menu menu = new Menu();
		List<MenuItem> items = new ArrayList<MenuItem>();

		MenuItem item1 = new MenuItem();
		item1.setLabel("Products");
		item1.setHref("product");
		items.add(item1);

		MenuItem item2 = new MenuItem();
		item2.setLabel("Link2");
		item2.setHref("link2");
		items.add(item2);

		MenuItem item3 = new MenuItem();
		item3.setLabel("Link3");
		item3.setHref("link3");
		items.add(item3);

		MenuItem item4 = new MenuItem();
		item4.setLabel("Link4");
		item4.setHref("link4");
		items.add(item4);

		MenuItem item5 = new MenuItem();
		item5.setLabel("Link5");
		item5.setHref("link5");
		items.add(item5);

		menu.setItems(items);

		return Response.status(Status.OK).entity(menu).build();
	}
}
