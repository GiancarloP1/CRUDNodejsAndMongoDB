
# Instrucciones para arrancar el proyecto Node.js con MongoDB

Este archivo contiene los pasos para ejecutar el proyecto Node.js que se conecta a MongoDB y realiza operaciones CRUD sobre una colección de productos.

## 1. Requisitos previos

Asegúrate de tener instalados los siguientes componentes:
- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com/try/download/community)

## 2. Instalación del proyecto

1. Clona el proyecto o descárgalo en tu máquina local.
2. Navega a la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```bash
    npm install
    ```

## 3. Arrancar MongoDB

Si tienes MongoDB instalado localmente, asegúrate de que esté corriendo. Puedes iniciar MongoDB ejecutando el siguiente comando en la terminal:

```bash
mongod
```

Si estás utilizando un servicio de MongoDB en la nube como **MongoDB Atlas**, asegúrate de tener las credenciales correctas en el archivo de conexión.

## 4. Configurar y arrancar el servidor

1. Para iniciar el servidor de Node.js, ejecuta el siguiente comando:

    ```bash
    node server.js
    ```

2. El servidor arrancará en el puerto `3000` y estará conectado a MongoDB.

    ```bash
    Servidor corriendo en el puerto 3000
    ```

## 5. Uso de las rutas

Las siguientes rutas están disponibles para interactuar con la colección de `productos`.

### Crear un nuevo producto

- **Ruta**: `POST /productos`
- **Descripción**: Crea un nuevo producto en la base de datos.
- **Cuerpo de la solicitud (JSON)**:

    ```json
    {
      "nombre": "Producto 1",
      "precio": 100,
      "descripcion": "Descripción del producto",
      "categoria": "Categoría del producto"
    }
    ```

### Obtener todos los productos

- **Ruta**: `GET /productos`
- **Descripción**: Obtiene una lista de todos los productos.

### Obtener un producto por ID

- **Ruta**: `GET /productos/:id`
- **Descripción**: Obtiene un producto específico basado en su ID.
- **Parámetro URL**: `id` del producto.

### Actualizar un producto por ID

- **Ruta**: `PATCH /productos/:id`
- **Descripción**: Actualiza los detalles de un producto específico.
- **Parámetro URL**: `id` del producto.
- **Cuerpo de la solicitud (JSON)**: Contiene los campos que deseas actualizar.

    ```json
    {
      "nombre": "Nuevo nombre del producto",
      "precio": 150
    }
    ```

### Eliminar un producto por ID

- **Ruta**: `DELETE /productos/:id`
- **Descripción**: Elimina un producto de la base de datos.
- **Parámetro URL**: `id` del producto.

## 6. Probar la API

Puedes usar herramientas como **Postman** o **cURL** para interactuar con la API.

### Ejemplo con cURL:

1. **Crear un producto**:

    ```bash
    curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d '{"nombre": "Producto 1", "precio": 100, "descripcion": "Este es un producto", "categoria": "Electrónica"}'
    ```

2. **Obtener todos los productos**:

    ```bash
    curl http://localhost:3000/productos
    ```

3. **Actualizar un producto**:

    ```bash
    curl -X PATCH http://localhost:3000/productos/<ID_DEL_PRODUCTO> -H "Content-Type: application/json" -d '{"nombre": "Producto Actualizado"}'
    ```

4. **Eliminar un producto**:

    ```bash
    curl -X DELETE http://localhost:3000/productos/<ID_DEL_PRODUCTO>
    ```

## 7. Conclusión

Este proyecto es una implementación básica de una API REST con Node.js y MongoDB. Puedes extenderla fácilmente para agregar más colecciones o características según las necesidades de tu aplicación.
