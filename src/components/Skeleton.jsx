export default function Skeleton({
  width = '100%',
  height = 12,
  radius = 8,
  variant = 'line', // line | circle
  accent = false,
  shineSpeed = 'normal', // slow | normal | fast
  style = {}
}){
  const className = [
    'skeleton',
    variant === 'circle' ? 'skeleton--circle' : 'skeleton--line',
    accent ? 'skeleton--accent' : '',
    `skeleton--${shineSpeed}`
  ].join(' ').trim();

  const computedRadius = variant === 'circle' ? '999px' : radius;

  return (
    <div
      className={className}
      style={{ width, height, borderRadius: computedRadius, ...style }}
      aria-hidden="true"
    />
  );
}