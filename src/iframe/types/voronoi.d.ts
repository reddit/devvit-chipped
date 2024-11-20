declare module 'voronoi' {
  export = Voronoi
  class Voronoi {
    vertices: Voronoi.Vertex[]
    edges: Voronoi.Edge[]
    cells: Voronoi.Cell[]
    // toRecycle: {}
    // beachsectionJunkyard: BeachSection[]
    // circleEventJunkyard: CircleEvent[]
    // vertexJunkyard: Vertex[]
    // edgeJunkyard: Edge[]
    // cellJunkyard: Cell[]
    reset(): void
    // beachline: any
    // circleEvents: CircleEvent[]
    // firstCircleEvent: any
    // sqrt: (x: number) => number
    // abs: (x: number) => number
    // ε: number
    // invε: number
    // equalWithEpsilon(a: any, b: any): boolean
    // greaterThanWithEpsilon(a: any, b: any): boolean
    // greaterThanOrEqualWithEpsilon(a: any, b: any): boolean
    // lessThanWithEpsilon(a: any, b: any): boolean
    // lessThanOrEqualWithEpsilon(a: any, b: any): boolean
    // RBTree(): void
    // root: any
    site: Voronoi.Site
    halfedges: Voronoi.Halfedge[]
    closeMe: boolean
    // createCell(site: Site): Cell
    x: number
    y: number
    lSite: Voronoi.Site
    rSite: Voronoi.Site
    // va: any
    // vb: any
    edge: Voronoi.Edge
    angle: number
    // createHalfedge(edge: Edge, lSite: Site, rSite: Site): Halfedge
    // createVertex(x: number, y: number): Vertex
    // createEdge(lSite: Site, rSite: Site, va: Vertex, vb: Vertex): Edge
    // createBorderEdge(lSite: Site, va: Vertex, vb: Vertex): Edge

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

    setEdgeStartpoint(
      edge: Voronoi.Edge,
      lSite: Voronoi.Site,
      rSite: Voronoi.Site,
      vertex: Voronoi.Vertex
    ): void
    setEdgeEndpoint(
      edge: Voronoi.Edge,
      lSite: Voronoi.Site,
      rSite: Voronoi.Site,
      vertex: Voronoi.Vertex
    ): void
    // createBeachsection(site: Site): any
    // leftBreakPoint(arc: any, directrix: any): any
    // rightBreakPoint(arc: any, directrix: any): any
    // detachBeachsection(beachsection: BeachSection): void
    // removeBeachsection(beachsection: BeachSection): void
    // addBeachsection(site: Site): void
    // arc: any
    // rbLeft: any
    // rbNext: any
    // rbParent: any
    // rbPrevious: any
    // rbRed: boolean
    // rbRight: any
    ycenter: number
    // attachCircleEvent(arc: any): void
    // detachCircleEvent(arc: any): void
    connectEdge(edge: Voronoi.Edge, bbox: Voronoi.Bbox): boolean
    clipEdge(edge: Voronoi.Edge, bbox: Voronoi.Bbox): boolean
    clipEdges(bbox: Voronoi.Bbox): void
    closeCells(bbox: Voronoi.Bbox): void
    quantizeSites(sites: Voronoi.Vertex[]): void
    recycle(diagram: Voronoi.Diagram): void
    compute(sites: Voronoi.Vertex[], bbox: Voronoi.Bbox): Voronoi.Diagram
  }
  namespace Voronoi {
    let ε: number
    let invε: number

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

    // class BeachSection {}

    class Cell {
      /** the Voronoi site object associated with the Voronoi cell. */
      site: Site
      /** counterclockwise polygon definition for cell. */
      halfedges: Halfedge[]

      private constructor(site: Site)
      pointIntersection(x: number, y: number): number
    }

    // class CircleEvent {}

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
