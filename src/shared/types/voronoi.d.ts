declare module 'voronoi' {
  export = Voronoi
  class Voronoi {
    Cell: {new (site: Voronoi.Site): Voronoi.Cell}
    Diagram: {new (site: Voronoi.Site): Voronoi.Diagram}
    Edge: {new (lSite: Voronoi.Site, rSite: Voronoi.Site): Voronoi.Edge}
    Halfedge: {
      new (
        edge: Voronoi.Edge,
        lSite: Voronoi.Site,
        rSite: Voronoi.Site
      ): Voronoi.Halfedge
    }
    Vertex: {new (x: number, y: number): Voronoi.Vertex}
    recycle(diagram: Voronoi.Diagram): void
    compute(sites: Voronoi.Vertex[], bbox: Voronoi.Bbox): Voronoi.Diagram
  }
  namespace Voronoi {
    type Bbox = {
      /** left. */
      xl: number
      /** right. */
      xr: number
      /** top. */
      yt: number
      /** bottom. */
      yb: number
    }

    class Cell {
      /** the Voronoi site object associated with the Voronoi cell. */
      site: Site
      /** counterclockwise polygon definition for cell. */
      halfedges: Halfedge[]

      private constructor(site: Site)
      pointIntersection(x: number, y: number): number
    }

    class Diagram {
      cells: Cell[]
      edges: Edge[]
      execTime: number
      site: Site | undefined
      vertices: Vertex[]
      private constructor(site: Site)
    }

    class Edge {
      /**
       * the Voronoi site object at the left of this Edge object. the site
       * object is just a reference to a site in the array of sites supplied by
       * the user when compute() was called.
       */
      lSite: Site
      /**
       * the Voronoi site object at the right of this Edge object (can be null,
       * when this is a border edge). The site object is just a reference to a
       * site in the array of sites supplied by the user when compute() was
       * called.
       */
      rSite: Site | null
      /**
       * a Vertex object with an x and a y property defining the start point
       * (relative to the Voronoi site on the left) of this Edge object.
       */
      va: Vertex
      /**
       * a Vertex object with an x and a y property defining the end point
       * (relative to Voronoi site on the left) of this Edge object.
       */
      vb: Vertex

      private constructor(lSite: Site, rSite: Site)
    }

    class Halfedge {
      /** the Voronoi site object owning this Halfedge object. */
      site: Site
      /** a reference to the unique Edge underlying this Halfedge object. */
      edge: Edge

      private constructor(edge: Edge, lSite: Site, rSite: Site)

      /**
       * returns the end point of this halfedge. halfedges are always
       * counterclockwise.
       */
      getEndpoint(): Vertex
      /**
       * returns the start point of this halfedge. halfedges are always
       * counterclockwise.
       */
      getStartpoint(): Vertex
    }

    type Site = {x: number; y: number; voronoiId: number}

    class Vertex {
      x: number
      y: number
      private constructor(x: number, y: number)
    }
  }
}
