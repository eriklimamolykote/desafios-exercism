def equilateral(sides):
    return triangle_inequality(sides) and len(set(sides)) == 1

def isosceles(sides):
    return triangle_inequality(sides) and len(set(sides)) < 3

def scalene(sides):
    return triangle_inequality(sides) and len(set(sides)) == 3

def triangle_inequality(sides):
    return all(sum(sides) > side * 2 for side in sides)