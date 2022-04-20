import '././myLabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es eltamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Si quiere que la etiqueta se muestre en mayusculas
   */
  allCaps: boolean;
  /**
   * Este es color de la etiqueta
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
