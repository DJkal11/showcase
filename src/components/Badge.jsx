export default function Badge({
  children,
  variant = 'blue', // color: blue | red | green
  size = 'md', // sm | md
  tone = 'soft', // soft | outline | solid
  dot = false,
  icon = null,
}){
  const className = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    `badge--tone-${tone}`,
    dot ? 'badge--dot' : ''
  ].join(' ').trim();

  return (
    <span className={className}>
      {icon ? <span className="badge__icon" aria-hidden>{icon}</span> : null}
      <span className="badge__text">{children}</span>
    </span>
  );
}