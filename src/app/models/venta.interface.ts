import Cliente from "./cliente.interface"
import Producto from "./producto.interface"

interface Venta {
  id: number;
  fecha: Date;
  cliente: Cliente;
  detallesVenta: DetalleVenta[];
}

interface DetalleVenta {
  id: number,
  producto: Producto,
  cantidad: number
}

export {
  Venta,
  DetalleVenta
}