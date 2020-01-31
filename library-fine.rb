def library_fine(d1, m1, y1, d2, m2, y2)
  return 0 if y1 < y2 ||
              y1 == y2 && m1 < m2 ||
              y1 == y2 && m1 == m2 && d1 <= d2

  return 10_000 if y1 > y2

  return (m1 - m2) * 500 if m1 > m2

  (d1 - d2) * 15
end

def solve
  puts library_fine(9, 6, 2015, 6, 6, 2015) # 45

end